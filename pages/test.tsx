import * as Contentstack from 'contentstack'
import React, { useContext } from 'react';

const credContext = React.createContext<any>(undefined)
const entryContext = React.createContext<any>(undefined);

export const ContentstackCredentials = (props: {
  key2: any,
  token: any,
  children: any
}) => {
  console.log(props);
  return <credContext.Provider value={{key: props.key2, token: props.token}}>
    {props.children}
  </credContext.Provider>
}
export const ContentStackEntry = (props: {
  entry_uid: any,
  content_type: any,
  environment: any,
  children: any,
}) => {
  const creds = useContext(credContext)!;

  const [ data, setData ] = React.useState<any>();
  console.log("creds", creds);
  React.useEffect(() => {
    const _fetch = async () => {
      const data = await fetch(
        `https://cdn.contentstack.io/v3/content_types/${props.content_type}/entries/${props.entry_uid}?environment=${props.environment}`,
        {
          headers: {
            api_key: creds.key,
            access_token: creds.token
          }
        }
      )
      setData(await data.json());
    }
    _fetch();
  }, [props.content_type, props.entry_uid, props.environment]);

  return <entryContext.Provider value={data?.entry}>
    {props.children}
  </entryContext.Provider>
}

export const ContextStackField = (props: {
  field: any,
  className?: string,
}) => {
  const entry = useContext(entryContext);
  if (!entry) return null;
  console.log(entry);
  return <span className={props.className}>{entry[props.field]}</span>
}
export const page = () => {
  return <ContentstackCredentials key2={"blt37e5d9fa4b15e084"} token={"cs3239b47b1c353a942a73e686"} >
    <ContentStackEntry entry_uid={"blt5c760b6ce70ae18b"} content_type={"home_page"} environment={"development"}>
      <ContextStackField field={"title"}   />
    </ContentStackEntry>
  </ContentstackCredentials>
}
export default page;