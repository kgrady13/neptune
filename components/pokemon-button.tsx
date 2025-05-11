'use client';

import { Text, TouchableOpacity, View } from 'react-native';
import { getRandomPokemon } from '../functions/get-pokemon';
import { useState } from 'react';

export function PokemonButton() {
  const [pokemon, setPokemon] = useState<React.ReactNode | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    setLoading(true);
    try {
      const result = await getRandomPokemon();
      setPokemon(result);
    } catch (error) {
      console.error('Failed to fetch Pokemon:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          backgroundColor: '#4CAF50',
          padding: 12,
          borderRadius: 8,
          marginBottom: 16,
        }}
        disabled={loading}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          {loading ? 'Loading...' : 'Get Random Pokemon'}
        </Text>
      </TouchableOpacity>
      
      {pokemon}
    </View>
  );
} 