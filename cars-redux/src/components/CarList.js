import { useSelector,useDispatch } from "react-redux";
import { removeCar } from "../store";
function CarList() {
  const dispatch = useDispatch()
  const carsList = useSelector((state)=>{
    return state.cars.data
  })

  const handleCarDelete = (car) =>{
    dispatch(removeCar(car.id))
  }

  const renderedCars = carsList.map((car)=>{
   return (
    <div key={car.id} className="panel" >
      <p>
        {car.name} - $ {car.cost}
      </p>
      <button className="button is-danger" onClick={()=>handleCarDelete(car)} >
        Delete
      </button>
    </div>
   )
  })

  console.log(carsList)

  return <div className="car-list">
   {renderedCars}
   <hr/>
  </div>;
}

export default CarList;
