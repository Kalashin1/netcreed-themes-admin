import Select, { MultiValue, SingleValue } from 'react-select'
import Loader from './Loader'
import { FormEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { db, storage } from '../firebase-settings'
import { addDoc, collection } from '@firebase/firestore'
import { uploadImage } from '../helper';
import { ITheme } from '../types';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

type selectType = { value: string, label: string }

const CreateTemplateForm = () => {
  const navigate = useNavigate()

  const templateForm = useRef<HTMLFormElement | null>(null)

  const [tags, setTags] = useState<MultiValue<selectType>>([]);
  const [category, setCategory] = useState<SingleValue<selectType>>({} as SingleValue<selectType>)

  const [loader, showLoader] = useState(false);

  const upload = async (e: FormEvent, form: HTMLFormElement) => {
    showLoader(true)
    e.preventDefault();
    try {
      const { title, price, coverImage, template, description } = form as any;


      const payload: Partial<ITheme> = {
        title: title.value,
        price: price.value,
        description: description.value,
        category: category!.value,
        tags: tags.map(t => t.value),
        saves: 0,
        views: 0,
        downloads: 0,
        owner: 'ADMIN',
        createdAt: new Date().getTime()
      };

      const imageResponse = await uploadImage(coverImage, storage, 'template-photos');
      const templateRes = await uploadImage(template, storage, 'template')

      payload.coverImage = imageResponse;
      payload.template = templateRes;

      await addDoc(collection(db, "templates"), payload);
      alert('Template created!')
      showLoader(false)
      navigate('/themes')
    } catch (error: any) {
      showLoader(false)
      console.log(error)
    }
  }

  return (
    <>
      {loader && (<Loader />)}
      <div className="card">
        <div className="card-header">
          <h4>Upload Template</h4>
        </div>
        <div className="card-body">
          <form ref={templateForm} onSubmit={e => upload(e, templateForm.current!)}>

            <div className="form-group">
              <label>Title</label>
              <input type="text" name='title' className="form-control" />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input type="number" name="price" className="form-control" />
            </div>

            <div>
              <div className="section-title">Select Category</div>
              <Select name='catgeory' options={options} onChange={v => setCategory(v)} />
            </div>

            <div>
              <div className="section-title">Select Tags</div>
              <Select name='tags' options={options} isMulti onChange={v => setTags(v)} />
            </div>

            <div className="form-group">
              <label>Cover Photo</label>
              <input type="file" name='coverImage' className="form-control" />
            </div>

            <div className="form-group">
              <label>Select Template</label>
              <input type="file" accept={"zip"} name='template' className="form-control" />
            </div>

            <div className="form-group my-4">
              <label>Description</label>
              <textarea className="form-control" name="description"></textarea>
            </div>

            <div>
              <button className='btn btn-success' type='submit'>Submit</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default CreateTemplateForm