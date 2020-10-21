import React, { useState } from 'react';
import { ScrollView, Platform, KeyboardAvoidingView } from 'react-native';

import Logon from './pages/Logon';
import Home from './pages/Home';
import Validation from './pages/Validation';

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

  const Component = () => {
    switch (href) {
      case 'Home':
        return <Home go={goNavigation} response={response} />;
      case 'Validation':
        return <Validation go={goNavigation} response={response} />;
      default:
        return <Logon go={goNavigation} response={response} />;
    }
  };

  if (Platform.OS === 'ios')
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <Component />
      </KeyboardAvoidingView>
    );
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Component />
    </ScrollView>
  );
}
