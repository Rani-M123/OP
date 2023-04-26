import React from 'react'
import { IPollProps } from './IPollProps';
import * as React from 'react'
// import { ISliderProps } from 'office-ui-fabric-react'
//import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { getSP } from './pnpConfig';
import { SPFI } from '@pnp/sp';
import "@pnp/sp/profiles";
import "@pnp/sp/lists";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import { ICamlQuery } from "@pnp/sp/lists";
import { ISilderProps } from './ISilderProps';
const caml:ICamlQuery={
  ViewXml:"<View><Query><FieldRef Name='ID' /><FieldRef Name='QuestionTitle' /></Query></View>",
}
const quick = (props:IPollProps) => {
  //const [urls,setUrl] = React.useState<any>([])
let arr = new Array()
const[data,setData] = React.useState<any>()
const getData = async()=>{
  let _sp:SPFI  = getSP(props.context)
      const list = await _sp.web.lists.getByTitle("OpinionPoll");
       console.log(list)
      const r = await list.getItemsByCAMLQuery(caml);
      console.log(r);
      arr=r
      setData(arr)
      console.log(arr);
      r.map((x:any)=>{
        console.log(x.Title);
        let arr = x.Choices;
        arr.map((i:any)=>{
          console.log(i);
        })
      })
    // log resulting array to console
}
React.useEffect(()=>{
  void getData()
},[])








  return (
    <div>quick</div>
  )
}

export default quick