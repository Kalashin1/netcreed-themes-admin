import Layout from "./Layout";
import Loader from "../Components/Loader";
import { ITheme } from "../types"
import ThemesDataTable from "../Components/Themes-Data-Table";
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../firebase-settings";
import { FC, useState, useEffect } from 'react';


const Themes: FC = () => {

  const [themes, setThemes] = useState<ITheme[]>([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getThemes = async () => {
      setLoader(true)
      const querySnapShot = await getDocs(collection(db, "templates"));
      const _themes = querySnapShot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as ITheme[]
      setThemes(_themes);
      setLoader(false);
    }

    getThemes()
  }, [])
  return (
    <Layout>
      <>
        { loader && (<Loader />)}
        <div className="section-body">
          <div className="row">
            <div className="col-12">
              { themes && (<ThemesDataTable themes={themes} />)}
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export default Themes;