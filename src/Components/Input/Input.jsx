/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import virtualkeyBoard from './virtualKeyboard/virtualKeyboard'
import './virtualKeyboard/virtualKeyboard.css'

export default function Input({
  setSearchTerm,
  searchTerm,
}) {
  return (
    <input
      className='useKeyboardInput'
      type="text"
      placeholder="Search..."
      onFocus={setSearchTerm && virtualkeyBoard(setSearchTerm, searchTerm)}
      onChange={(event) => {
        console.log(setSearchTerm, searchTerm);
        // console.log(event.target.value);
        setSearchTerm(event.target.value);
        virtualkeyBoard(setSearchTerm, searchTerm)
        // console.log(searchTerm);
      }} />
  );
}
