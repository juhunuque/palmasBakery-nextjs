import Prismic from 'prismic-javascript'

export const apiEndpoint = process.env.NEXT_PRISMIC_URL;
export const accessToken = process.env.NEXT_PRISMIC_ACCESS_TOKEN

export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)


const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}
