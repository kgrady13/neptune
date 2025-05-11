/// <reference types="react/canary" />

// This route is a client component.
import "client-only";

import { ActivityIndicator, StyleSheet, View } from "react-native";
import { renderHomeAsync } from "../functions/render-home";
import { PokemonButton } from "../components/pokemon-button";
import React from "react";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <React.Suspense fallback={ <ActivityIndicator />}>
          {renderHomeAsync()}
        </React.Suspense>
        <PokemonButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
