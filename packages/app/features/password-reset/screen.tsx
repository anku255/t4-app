import { YStack, useToastController } from '@t4/ui'
import { PasswordResetComponent } from '@t4/ui/src/PasswordReset'
import { sendPasswordResetEmail } from 'supertokens-web-js/recipe/thirdpartyemailpassword'
import { isIos, isAndroid } from '@tamagui/core'

export function PasswordResetScreen() {
  const { push } = useRouter()
  const toast = useToastController()

  const handleEmailWithPress = async (email) => {
    try {
      const { status } = await sendPasswordResetEmail({
        formFields: [
          {
            id: 'email',
            value: email,
          },
        ],
        options: {
          async preAPIHook(input) {
            return {
              ...input,
              requestInit: {
                ...input.requestInit,
                headers: {
                  ...input.requestInit.headers,
                  'X-Platform': isAndroid ? 'android' : isIos ? 'ios' : 'web',
                },
              },
            }
          },
        },
      })

      if (status === 'PASSWORD_RESET_NOT_ALLOWED') {
        toast.show(`Password reset is not allowed for this email! Please contact support!`)
      } else if (status === 'FIELD_ERROR') {
        toast.show(`No account exists with this email.`)
      } else {
        toast.show(`A password reset email has been sent to your email!`)
        push('/')
      }
    } catch (error) {
      toast.show('Password reset request failed', {
        description: error.message,
      })
    }
  }

  return (
    <YStack flex={1} justifyContent='center' alignItems='center' space>
      <PasswordResetComponent type='email' handleWithPress={handleEmailWithPress} />
    </YStack>
  )
}
