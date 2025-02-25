const handelNavigation = (e, navigate) => {
  console.log(e.target.parentElement);
  
      if (e.target.id == 'fillFormBtn' ) {
        navigate("/fillForm")
      }else {
        navigate("/destination-Info");
    }
}

 export default handelNavigation; 