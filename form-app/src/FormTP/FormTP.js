import React from 'react';
import EmailForm from './EmailForm/EmailForm';
import PasswordForm from './PasswordForm/PasswordForm';
import ValidationForm from './ValidationForm/ValidationForm';
import ConfirmPasswordForm from './ConfirmPasswordForm/ConfirmPasswordForm';

function FormTP() {
    return (
      <form className="formTP">
          <EmailForm />
          <PasswordForm />
          <ConfirmPasswordForm />
          <ValidationForm />
      </form>
    );
}

export default FormTP;