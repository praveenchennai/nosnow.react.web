import Config from './config.json';
import Amplify, {Auth} from 'aws-amplify';
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";

export const config=()=> {
    var params = {
        Auth: {
            mandatorySignId: true,
            identityPoolId: Config.userPool.identityPoolId,
            region: Config.userPool.REGION,
            userPoolId: Config.userPool.USER_POOL_ID,
            userPoolWebClientId: Config.userPool.APP_CLIENT_ID
        },
    };
    Amplify.configure(params)
}

export function updateSessions(es, env){
    return Auth.currentAuthenticatedUser()
    .then(session=>{
        return sessionUsrUpdate(session, env, es, Config[`${env}UserPool`])
        .then(usrSession=>{
            return usrSession.usrUpdate;
        })
        .catch(err=>{
            return 'logged Out';
        })
    })
    .catch(err=>{
        return 'logged Out';
    })
}

export const getToken = async (cognito) =>{
    const poolData = {UserPoolId: cognito.USER_POOL_ID, ClientId: cognito.APP_CLIENT_ID};
    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser !== null) {
        return cognitoUser.getSession((err, session) => {
            if (session.isValid()) {
                var idToken = session.idToken.jwtToken;
                var accessToken = session.accessToken.jwtToken;
                return {
                    idToken:idToken, 
                    accessToken: accessToken
                };
            } else {
                return 'logged Out';
            }
        })
    } else {
        return 'logged Out';
    }
}

export const register = async (reg) =>{
    var signUpParams = {
        username: reg.email.toLowerCase(),
        password: 'nosnowsells',
        attributes: {
            name: `${reg.firstName || ' '} ${reg.lastName || ''}`,
            given_name: reg.firstName || '',
            family_name: reg.lastName || '',
            phone_number: reg.phone_number || '',
            address: `${reg.address.streetName} ${reg.address.city}, ${reg.address.state} ${reg.address.zipCode} United States` || '',
            email: reg.email.toLowerCase(),
            "custom:taxId": reg.taxId || ''
        }
    }
    

    return Auth.signUp(signUpParams)
    .then(user=>{
        return user;
    })
    .catch(error=>{
        return 'done with error';
    })
}

export const sessionUsrUpdate = async (session, stage, es, cognito) => {
    if(session.attributes){
    return getToken(cognito)
    .then(token=>{
        if(token!=='logged Out'){
            // var usrUpdate = {
            //     id: session.attributes.sub, 
            //     firstName: session.attributes.given_name, 
            //     lastName: session.attributes.family_name, 
            //     email: session.attributes.email, 
            //     phone: session.attributes.phone_number,
            //     stage: stage,
            //     userPoolId: session.pool.userPoolId,
            //     userType: Config.userType,
            //     idToken: token.idToken,
            //     accessToken: token.accessToken
            // }
        }
    })
    .catch(err=>console.log(err))
    }
}