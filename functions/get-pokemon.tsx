'use server';

import { View, Text, Image } from 'react-native';

export async function getRandomPokemon() {
  // Generate a random Pokemon ID between 1 and 151 (first generation)
  const randomId = Math.floor(Math.random() * 151) + 1;
  
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const pokemon = await res.json();
  
  return (
    <View style={{ padding: 16, alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Text>
      <Image 
        source={{ uri: pokemon.sprites.front_default }} 
        style={{ width: 150, height: 150 }}
      />
      <Text style={{ marginTop: 8 }}>
        Type: {pokemon.types.map((t: any) => t.type.name).join(', ')}
      </Text>
    </View>
  );
} 