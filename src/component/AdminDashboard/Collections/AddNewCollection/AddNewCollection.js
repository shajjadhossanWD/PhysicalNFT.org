import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  background: transparent;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  margin: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  &:hover {
    background: #272D47;
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
  background: transparent;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});
const AddNewCollection = () => {
    const [body, setBody] = useState("");
    
    const handleBody = e =>{
        console.log(e);
        setBody(e);
    }
    return (
        <div>
        
        <div className='addItemDiv'>
        <div className="bannerImg mt-3">
            <p className='text-start text-white'><b>Logo Image</b></p>
            <p className='text-start text-white'><small>250 X 250 recommended</small></p>
            <div className="profileImgDiv">
            <i className="far fa-image bannerIcon" ></i>           
           </div>
           <div className="choseDiv">
           <button className='text-start text-black chooseBtn'>Choose file</button> <span className='text-start text-white'><small>No file Chosen</small></span>
           </div>
        </div>

        <div className="bannerImg mt-3">
            <p className='text-start text-white'><b>Featured Image</b></p>
            <p className='text-start text-white'><small>600 X 400 recommended</small></p>
            <div className="FeaturedImgDiv">
            <i className="far fa-image bannerIcon" ></i>           
           </div>
           <div className="choseDiv">
           <button className='text-start text-black chooseBtn'>Choose file</button> <span className='text-start text-white'><small>No file Chosen</small></span>
           </div>
        </div>

        <div className="bannerImg mt-3">
            <p className='text-start text-white'><b>Banner Image</b></p>
            <p className='text-start text-white'><small>1400 X 400 recommended</small></p>
            <div className="bannerImgDiv">
            <i className="far fa-image bannerIcon" ></i>           
           </div>
           <div className="choseDiv">
           <button className='text-start text-black chooseBtn'>Choose file</button> <span className='text-start text-white'><small>No file Chosen</small></span>
           </div>
        </div>
            <div className="creatorEarn mt-3">
                  <div className="creatorDes">
                  <p className='text-start text-white'><b>Name of collection</b></p>
                  </div>
                <input type="text" className='creatorInput'/>
            </div>

            <div className="creatorEarn mt-3">
                  <div className="creatorDes">
                  <p className='text-start text-white'><b>URL</b></p>
                <p className='text-start'><small>Customize your URL. Must only contain lowercase letters,numbers, and hyphens.</small></p>
                  </div>
                <input type="text" className='creatorInput' placeholder='https://physicalnft.org/collections/' />
            </div>

            <div className="textEditor mt-3">
                <p className='text-start text-white'>Description</p>
                <p className='text-start text-white'><small>Markdown syntax is supported. 0 of 1000 characters used.</small></p>
                <ReactQuill
                  placeholder='write your item description'
                  modules={AddNewCollection.modules}
                  formats={AddNewCollection.formats}
                  onChange={handleBody}
                  value={body}

                />
            </div>

            <div className="sectionSelect mt-3">
            <div className="selectionItemDes">
            <h6 className='text-start text-white'>Category</h6>
            <p className='text-start text-white'><small>Adding a category will help make your item discoverable on Physicalnft.</small></p>
            </div>
            <CustomSelect defaultValue={10}>
                <StyledOption value={10}>Ten</StyledOption>
                <StyledOption value={20}>Twenty</StyledOption>
                <StyledOption value={30}>Thirty</StyledOption>
            </CustomSelect>
            </div>

            <div className="linksDiv mt-3">
                    <h6 className='text-start text-white'>Links</h6>
                   <p className="d-flex">
                   <span className='iconCreator'><TwitterIcon/></span>
                   <input className="collectionInput" type="text" placeholder='Link twitter profile' />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><InstagramIcon/></span>
                   <input className="collectionInput" type="text" placeholder='Link instagram profile' />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><LanguageIcon/></span>
                   <input className="collectionInput" type="text" placeholder='Link your website' />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><LanguageIcon/></span>
                   <input className="collectionInput" type="text" placeholder='Link your website' />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><LanguageIcon/></span>
                   <input className="collectionInput" type="text" placeholder='Link your website' />
                   </p>
            </div>

            <div className="creatorEarn mt-3">
                  <div className="creatorDes">
                  <p className='text-start'><b>Creator Earnings</b></p>
                <p className='text-start'><small>Collect a fee when a user re-sells an item you originally created. This is deducted from the final sale price and paid monthly to a payout address of your choosing. Learn more about creator earnings. Percentage fee</small></p>
                  </div>
                <input type="text" className='creatorInput' placeholder='e.g.2.5' />
            </div>

            <div className="selectBlockChain mt-3">
            <div className="descriptionChain">
                <p className='text-start'>Blockchain <small>Select the blockchain where you'd like new items from this collection to be added by default.</small></p>
            </div>
            <div className='blockchainInput'>
            <CustomSelect defaultValue={10}>
                <StyledOption value={10}>Ten</StyledOption>
                <StyledOption value={20}>Twenty</StyledOption>
                <StyledOption value={30}>Thirty</StyledOption>
            </CustomSelect>
            </div>
            </div>

            <div className="selectBlockChain mt-3">
            <div className="descriptionChain">
                <p className='text-start pay'>Payment Tokens</p>
                <p className='text-start'><small>These tokens can be used to buy and sell your items</small></p>
            </div>
            <div className='blockchainInput'>
            <CustomSelect defaultValue={10}>
                <StyledOption value={10}>Ten</StyledOption>
                <StyledOption value={20}>Twenty</StyledOption>
                <StyledOption value={30}>Thirty</StyledOption>
            </CustomSelect>
            </div>
            </div>
            <button className='createBtn'>Create</button>
        </div>

          <div className="copyrightAdmin ">
      <p>Copyright © 2022 - DS Legends Pte. Ltd.</p>
    </div>
    </div>
    );
};

AddNewCollection.modules={
    toolbar:[
        [{header: '1'}, {header: '2'}, {header: [3, 4, 5, 6]}, {font: []}],
        [{size: []}],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{list: 'ordered'}, {list: 'bullet'}],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block'],
    ],
};
AddNewCollection.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block',
];


export default AddNewCollection;