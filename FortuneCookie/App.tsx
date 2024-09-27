import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Exemplo de frases de sorte (pode ser modificado para API)
const fortunes = [
  "A vida é cheia de surpresas, abra seu coração.",
  "A sorte sorri para aqueles que acreditam em seus sonhos.",
  "Um novo começo está à sua espera.",
  "Seu esforço será recompensado em breve.",
  "A felicidade está ao seu alcance, apenas estenda a mão.",
  "O amor está em todos os lugares, você só precisa olhar.",
  "Acredite em si mesmo e tudo será possível.",
  "Grandes mudanças estão a caminho.",
  "Você encontrará a inspiração que procura.",
  "A gratidão atrai mais coisas boas.",
  "Siga sua intuição, ela o levará aonde precisa.",
  "Um amigo verdadeiro está mais perto do que você pensa.",
  "O sucesso está a apenas um passo da sua zona de conforto.",
  "Prepare-se para receber boas notícias em breve.",
  "O universo está conspirando a seu favor.",
  "Seus sonhos estão mais próximos do que você imagina.",
  "Um momento de calma trará clareza para suas decisões.",
  "Não tenha medo de arriscar; a sorte favorece os ousados.",
  "Você possui a chave para o seu próprio sucesso.",
  "O que você procura está procurando por você.",
  "Aproveite cada pequeno momento, eles são preciosos."
];

const App = () => {
  const [broken, setBroken] = useState(false);
  const [fortune, setFortune] = useState('');

  // Função para "quebrar" o biscoito e mostrar a frase
  const breakCookie = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(randomFortune);
    setBroken(true);
  };

  // Função para resetar o biscoito
  const resetCookie = () => {
    setBroken(false);
    setFortune('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={broken ? resetCookie : breakCookie}>
        <Image
          source={broken ? require('./assets/quebrado.jpg') : require('./assets/biscoito.jpg')}
          style={styles.cookieImage}
        />
      </TouchableOpacity>

      {broken && (
        <Text style={styles.fortuneText}>
          {fortune}
        </Text>
      )}

      <TouchableOpacity style={styles.button} onPress={broken ? resetCookie : breakCookie}>
        <Text style={styles.buttonText}>
          {broken ? "Tente outra vez" : "Quebre o biscoito"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cookieImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  fortuneText: {
    fontSize: 18,
    color: '#555',
    marginVertical: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#f49f15',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

