import './App.css';

function App() {
  return (

    <>

    < ContactCard
    
    name = "ian"
    contact = {27899999999}
     />


      < ContactCard
    
    name = "tey"
    contact = {22222222}
     />


      < ContactCard
   
    name = "macky"
    contact = {4564644}
     />

      < ContactCard
   
    name = "hada"
    contact = {40702925733}
     />

      < ContactCard
   
    name = "emy"
    contact = {7890578394}
     />

    </>



    


  );
}


const ContactCard = (props) =>{

  return(


    <div className="parent">

  <div className="card">
  
  <div className="card-body">
    <p className="card-text"> {props.name} </p>
    <p className="card-text">{props.contact} </p>
   <button type="button" className="btn btn-danger">Call</button>
   <button type="button" className="btn btn-warning">Message</button>
</div>
</div>
</div>




    )


}

export default App;
