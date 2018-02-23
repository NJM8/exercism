
const DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function(str){
  const validDNAStr = new RegExp(/[^GCTA]/, 'g');
  
  if (validDNAStr.test(str)) {
    throw new Error('Invalid input');
  }
  
  const dnaMap = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  }
  return [...str.split('')].reduce((rna, letter) => {
    rna.push(dnaMap[letter]);
    return rna;
  }, []).join('');
}

// const test = new DnaTranscriber();
// console.log(test.toRna('XXX'));
module.exports = DnaTranscriber;