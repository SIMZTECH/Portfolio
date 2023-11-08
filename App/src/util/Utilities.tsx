/* eslint-disable @typescript-eslint/no-explicit-any */

export const formatDate=(date:string,config:any)=>{
 const defaultOptions = {day:"numeric",month:"short",year:"numeric"};
 const options=config?config:defaultOptions;

 return new Date(date).toLocaleDateString("en-US",options);

};