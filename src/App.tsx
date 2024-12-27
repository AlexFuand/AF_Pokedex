import React, {useEffect, useState} from 'react';
import './styles.scss';

const App: React.FC = () => {
   const [searchParam, setSearchParam] = useState<number | string>();
   const [search, setSearch] = useState<number | string>();
   const [pokeName, setPokeName] = useState<string>('');
   const [pokeNumber, setPokeNumber] = useState<number | undefined>();
   const [pokeTypes, setPokeTypes] = useState([]);
   const [pokeSprite, setPokeSprite] = useState('');
   const keyboard = [...Array(10).keys()];

    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchParam}`)
      const pokeBody = await response.json()
      setPokeName(pokeBody.name);
      setPokeNumber(pokeBody.id);
      setPokeTypes(pokeBody.types);
      setPokeSprite(pokeBody.sprites.front_default);
    }

    useEffect(() => {
      if (searchParam) {
      fetchData();
      }
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParam]);

   const transformResearch = (value: string | number | undefined) => {
      const correctedValue = value.replace(/\s+/g, "").toLowerCase();
      setSearchParam(correctedValue);
      setSearch('');
   }

   const clear = () => {
      setSearchParam('');
      setSearch('');
      setPokeName('');
   }

   const next = async () => {
      setSearchParam(pokeNumber + 1);
   }

   const previous = () => {
      setSearchParam(pokeNumber - 1);
   }

   const addKeyboardValue = (value: string |number) => {
      value === 0 ? setSearch('') : search ? setSearch(search + value.toString()) : setSearch(value.toString());
   } 
   
 return (
   <>
      <div className='topPokedex'>
         {/* div bouton + polygone à positionner */}
         <div className='upScreen'>
            <div className='upScreenButton'>
               <div className='upScreenButtonOne'></div>
               <div className='upScreenButtonTwo'></div>
               <div className='upScreenButtonThree'></div>
               <div className='upScreenButtonFour'></div>
               <div className='upScreenButtonFive'>
                  <div className='upScreenButtonShadow'></div>
               </div>
            </div>
            <div className='upScreenPolygon'></div>
            <div className='topButtons'>
               <div className='topButton topButtonOne'>
                  <div className='topButtonShadow'></div>
               </div>
               <div className='topButton topButtonTwo'>
                  <div className='topButtonShadow'></div>
               </div>
               <div className='topButton topButtonThree'>
                  <div className='topButtonShadow'></div>
               </div>
            </div>
         </div>
         {/* div de l'écran d'affichage avec élement déco*/}
         <div className='screen'>
            <div className='screenElements'>
               <div className='screenUpButtons'>
                  <div className='screenUpButtonOne'>
                     <div className='screenUpButtonShadow' />
                  </div>
                  <div className='screenUpButtonTwo'>
                     <div className='screenUpButtonShadow' />
                  </div>
               </div>
               <div className='screenBackground'>
                  {pokeName ? (
                        <div className='screenLoaded'>
                           <img src={pokeSprite} alt={pokeSprite}></img>
                           <div className='infos'>
                              <div>Pokedex N° : {pokeNumber} </div>
                              <div className='pokeName'>{pokeName}</div>
                              <div className='pokeType'>{pokeTypes.length === 1 ? 'Type' : 'Types'} : {pokeTypes.map((e, index) => <span key={index}>{e.type.name}</span>)}</div>
                           </div>
                        </div>
                     ) : (
                        <div className='screenBase'>
                        </div>
                     )}
               </div>
               <div className='screenDown'>
                  <div className='screenDownButtons'></div>
                  <div className='screenDownButtons'></div>
                  <div className='screenDownButtons'></div>
               </div>
            </div>
         </div>
      </div>
      {/* div des lignes de séparation*/}
      <div className='lines'>
         <div className='contrastLineOne'></div>
         <div className='contrastLineTwo'></div>
         <div className='yellowLine'></div>
         <div className='borderLine'></div>
      </div>
      {/* div fonctions navigation */}
      <div className='bottomPokedex'>
         {/* ecran de recherche */}
         <div className='bottomScreen'>
            <input value={search} type='text' placeholder='ENTER NAME OR NUMBER' onChange ={(e) => setSearch(e.target.value)} className='input_zone'/>
            <div className='shadow one'></div>
            <div className='shadow two'></div>
            <div className='shadow three'></div>
         </div>
         <div className='bottomKeyboard'>
            {
               keyboard.map((value, index) => (
                  <button className='keyboardButton' key={index} onClick={() => addKeyboardValue(value)}>{value}</button>
               ))
            }
         </div>
         {/* boutons recherche/clear */}
         <div className='bottomButtons'>
            <div className='bottomButtonsLeft'>
               <button className='searchButton' onClick={() =>  transformResearch(search)}>search</button>
               <button className='clearButton' onClick={() => clear()}>clear</button>
            </div>
            <div className='bottomButtonRight'>
               <div className='upScreenButton'>
                  <div className='upScreenButtonOne'></div>
                  <div className='upScreenButtonTwo'></div>
                  <div className='upScreenButtonThree'></div>
                  <div className='upScreenButtonFour'></div>
                  <div className='upScreenButtonFive'>
                     <div className='upScreenButtonShadow'></div>
                  </div>
               </div>
            </div>
         </div>
         {/* boutons navigation */}
         <div className='bottomNav'>
            <button className='previousButton' onClick={() => previous()}>Previous</button>
            <button className='nextButton' onClick={() => next()}>Next</button>
         </div>
      </div>
   </>
 )
}
  
export default App;