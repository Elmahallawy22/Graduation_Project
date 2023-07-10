function Services() {
  return (
    <div className="pt-16">    <table className=' ml-12'>
      <thead>
        <tr>
          <td>id</td>
          <td>image</td>
          <td>Service</td>
          <td>action</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td className='flex justify-center'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAg7ixL66o3ohqCSEa1lQlY_FFJZ3tfS-Uw&usqp=CAU' width='80px' height='70px' /></td>
          <td className='font-bold'>Psychiatric</td>
          <td><button className='bg-red-500 text-white px-4 py-2 rounded-lg'>delete</button> </td>
        </tr>
        <tr>
          <td>2</td>
          <td className='flex justify-center'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU' width='80px' height='70px' /></td>
          <td className='font-bold'>Special</td>
          <td><button className='bg-red-500 text-white px-4 py-2 rounded-lg'>delete</button> </td>
        </tr>
        <tr>
          <td>3</td>
          <td className='flex justify-center'><img src='https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=' width='80px' height='70px' /></td>
          <td className='font-bold'>Emergancy</td>
          <td><button className='bg-red-500 text-white px-4 py-2 rounded-lg'>delete</button> </td>
        </tr>
        <tr>
          <td>4</td>
          <td className='flex justify-center'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvnWRR38BLQTtCPhUWe-FCo26kyC5A8zI-A&usqp=CAU' width='80px' height='70px' /></td>
          <td className='font-bold'>Eaderly</td>
          <td><button className='bg-red-500 text-white px-4 py-2 rounded-lg'>delete</button> </td>
        </tr>
        <tr>
          <td>5</td>
          <td className='flex justify-center'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw6cBK8RQBDoi-q9XVB3Y8Yyhrv4fPlDF3A&usqp=CAU' width='80px' height='70px' /></td>
          <td className='font-bold'>Women</td>
          <td><button className='bg-red-500 text-white px-4 py-2 rounded-lg'>delete</button> </td>
        </tr>
        <tr>
          <td>6</td>
          <td className='flex justify-center'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZUAkiXJ6wBElY33-lkR1w-plRf361BlgGQ&usqp=CAU' width='80px' height='70px' /></td>
          <td className='font-bold'>Pediatic</td>
          <td><button className='bg-red-500 text-white px-4 py-2 rounded-lg'>delete</button> </td>
        </tr>
      </tbody>
    </table>
    </div>

  )
}
export default Services;