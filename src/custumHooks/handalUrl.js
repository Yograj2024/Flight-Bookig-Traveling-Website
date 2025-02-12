const handleClick = (e, navigate) => {
      if (e.target.tagName === 'BUTTON') {
        navigate("/fillForm")
      } else {
        navigate("/destination-Info");
    }
}

 export default handleClick; 