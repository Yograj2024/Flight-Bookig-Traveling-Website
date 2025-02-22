const handelNavigation = (e, navigate) => {
      if (e.target.id == 'fillFormBtn' ) {
        navigate("/fillForm")
      } else {
        navigate("/destination-Info");
    }
}

 export default handelNavigation; 