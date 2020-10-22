import React, { useState } from 'react';
import { ScrollView, Platform, KeyboardAvoidingView } from 'react-native';

import Logon from './pages/Logon';
import Home from './pages/Home';
import Validation from './pages/Validation';
import Camera from './pages/Camera';

export default function Routes() {
  const [href, setHref] = useState('Logon');
  const [response, setResponse] = useState({});
  const [user, setUser] = useState(null);

  function goNavigation(value, param) {
    const tempParam = param || {};
    if (tempParam.user) setUser(tempParam.user);
    if (user) tempParam.user = user;
    setResponse(tempParam);
    setHref(value);
  }

  function TypePlatform(children) {
    if (Platform.OS === 'ios')
      return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
          {children}
        </KeyboardAvoidingView>
      );
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {children}
      </ScrollView>
    );
  }

  switch (href) {
    case 'Home':
      return TypePlatform(<Home go={goNavigation} response={response} />);
    case 'Validation':
      return TypePlatform(<Validation go={goNavigation} response={response} />);
    case 'Camera':
      return <Camera go={goNavigation} response={response} />;
    default:
      return TypePlatform(<Logon go={goNavigation} response={response} />);
  }
}
