import { Stack, useSegments } from 'expo-router';
import React, { useEffect } from 'react';

export default function RootLayout() {
  const segments = useSegments();
  useEffect(() => {
    const lastSegment = segments[segments.length - 1];
    const pestaña = lastSegment ? ` - ${lastSegment}` : 'Adesoft';
    document.title = `AdeSoft${pestaña}`;
  }, [segments]);

  return (
    <Stack>
      <Stack.Screen name="starter" options={{ headerShown: false }} />
      <Stack.Screen name="Inicio" options={{ headerShown: false }} />
    </Stack>
  );
}
