import Layout from "./Layout";
import ThemeComponent from "../Components/Theme-Component";
import { useParams } from "react-router";
import Loader from "../Components/Loader";
import { FC, useState, useEffect } from "react";
import { ITheme } from "../types";
import { db } from "../firebase-settings";
import { getDoc, doc } from "firebase/firestore";

const Theme: FC = () => {
  const { id } = useParams();
  const [theme, setTheme] = useState<ITheme>()
  const [loader, showLoader] = useState(false)

  useEffect(() => {
    const getTheme = async () => {
      showLoader(true)
      const docSnap = await getDoc(doc(db, "templates", id!));
      const _theme = { ...docSnap.data(), id: docSnap.id } as ITheme
      setTheme(_theme)
      showLoader(false)
    }

    getTheme();

  }, [])

  return (
    <Layout>
      <>
        {loader && (<Loader />)}
        <div className="section-body">
          <div className="row">
            <div className="col-12">
              {theme && (<ThemeComponent theme={theme} />)}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default Theme;