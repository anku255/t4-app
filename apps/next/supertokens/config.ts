import ThirdPartyEmailPassword from 'supertokens-web-js/recipe/thirdpartyemailpassword'
import ThirdParty from 'supertokens-web-js/recipe/thirdparty'
import { SessionAuth } from 'app/utils/supertokens/SessionAuth'

export const config = {
  appInfo: {
    appName: 'T4 App',
    apiDomain: process.env.NEXT_PUBLIC_API_URL!,
    apiBasePath: '/api/auth',
  },
  recipeList: [SessionAuth.init({}), ThirdPartyEmailPassword.init(), ThirdParty.init()],
}
