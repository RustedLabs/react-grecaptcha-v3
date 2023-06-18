import { useContext } from 'react';
import { Context, ExecuteRecaptcha } from './RecaptchaProvider';

const useExecuteReCaptcha = (): ExecuteRecaptcha => {
  return (
    useContext(Context)?.executeRecaptcha ??
    (action => {
      return Promise.reject(
        new Error(`Recaptcha context not injected. ${action} missed`)
      );
    })
  );
};
export default useExecuteReCaptcha;
