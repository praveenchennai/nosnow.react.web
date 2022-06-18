import { initSplitApi } from './init'

export const contentAPI = initSplitApi.injectEndpoints({
    reducerPath: 'content',
    endpoints: (builder) => ({
        content: builder.query({
            query: (params) => {
                return {
                    url: ``,
                    method: 'GET',
                    service: 'content-service',
                    name: params.name
                }
            },
            providesTags: ['content']
        })
    }),
    overrideExisting: false
})

export const { 
    useContentQuery
} = contentAPI