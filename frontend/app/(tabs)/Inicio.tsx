import { Link, Stack, useRouter } from 'expo-router';
import { StyleSheet, Pressable } from 'react-native';
import { ThemedCheckbox } from '@/components/ui/ThemedCheckbox';
import React, { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedInput } from '@/components/ThemedInput';

export default function Inicio() {

  const [remember, setRemember] = useState(false);
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Inicio', headerShown: false }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">¡Bienvenido!</ThemedText>
        <ThemedText type="default" style={styles.label}>Código de Acceso</ThemedText>
        <ThemedInput  placeholder="Ingresa tu código" icon />
        <ThemedCheckbox
          checked={remember}
          onPress={() => setRemember(!remember)}
          label="Recordarme"
        />
        <Pressable style={styles.button} onPress={() => router.push('/(tabs)/(menu_tabs)/Dashboard')}>
          <ThemedText style={styles.buttonText}>Ingresar</ThemedText>
        </Pressable>
        <Link href="/" style={styles.link}>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  label: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    color: 'black',
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,  
    borderWidth: 1,
    backgroundColor: '#215b98ff',
    textTransform: 'uppercase',
    marginBottom: 10,
    fontSize: 16,
    alignSelf: 'center',
    position: 'relative',
    justifyContent: 'center',
    color: '#fff',
    borderColor: 'transparent',
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    textTransform: 'uppercase',
  }
});
