export const validatePokemonName = (name) => {
    if (name.length < 4) {
      return false
    }
    
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(name)) {
      return false
    }
  
    return true
  }