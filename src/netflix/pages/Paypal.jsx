// import { makeStyles } from "@material-ui/core";
// import { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";


// export const Paypal = () => {
//   const {price} = useSelector((state)=> state.price)
//   const paypal = useRef();

//   useEffect(() => {
//     window.paypal.Buttons({
//       createOrder: (data,actions,error)=> {
//         return actions.order.create({
//           intent: 'CAPTURE',
//           purchase_units:[
//             {
//               description:'Netflix subscription',
//               amount: {
//                 currency_code: 'COP',
//                 value: price,
//               },
//             },
//           ],
//         });
//       },
//       onApprove  : async(data,actions)=> {
//         const order = await actions.order.capture();
//       },
//       onError    : (error)=> console.log(error),
//     }).render(paypal.current)
  

//   }, [])
  

//   return (
//     <div ref={paypal}>Paypal</div>
//   )
// }

// const useStyles = makeStyles((theme) => ({
//   root: {

//   }
// }))
