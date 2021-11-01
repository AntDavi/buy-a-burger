import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native'
import LottieView from 'lottie-react-native'
import CreditCardForm, { Button, FormModel } from 'rn-credit-card'


const cardCredit: React.FC = () => {
  const formMethods = useForm<FormModel>({
    // to trigger the validation on the blur event
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  })
  const { handleSubmit, formState } = formMethods

  function onSubmit(model: FormModel) {
    console.log('Success: ' + JSON.stringify(model, null, 2))
  }

  return (
    <FormProvider {...formMethods}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.avoider}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <CreditCardForm
            fonts={{
                regular: 'RobotoMono_400Regular',
                bold: 'RobotoMono_700Bold',
            }}
            LottieView={LottieView}
            horizontalStart
            overrides={{
              labelText: {
                marginTop: 16,
              },
            }}
            // those are the default values
            translations={{
              cardNumber: 'Número do Cartão',
              cardHolderName: 'Nome do cartão',
              nameSurname: 'Nome sobrenome',
              mmYY: 'MM/YY',
              expiration: 'Validade',
              securityCode: 'CVV',
              next: 'Proximo',
              done: 'Certo',
              cardNumberRequired: 'Precisamos do número do cartão.',
              cardNumberInvalid: 'Este número é inválido.',
              expirationRequired: 'Precisamos da data de validade.',
              expirationInvalid: 'Esta data de validade é inválida.',
              securityCodeRequired: 'Precisamos do CVV.',
              securityCodeInvalid: 'Este CVV é inválido',
            }}
          />
        </KeyboardAvoidingView>
        {formState.isValid && (
          <Button
            style={styles.button}
            title={'Confirmar Pagamento'}
            onPress={handleSubmit(onSubmit)}
          />
        )}
      </SafeAreaView>
    </FormProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avoider: {
    flex: 1,
    padding: 36,
  },
  button: {
    margin: 36,
    marginTop: 0,
  },
  cardPreview: {
    fontSize: 16
  }
})

export default cardCredit;