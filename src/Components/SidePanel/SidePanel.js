import avatar from '../../resources/Avatar.svg';
import folder from '../../resources/Folder Icon.svg';
import arrow from '../..//resources/Arrow.svg';
import './SidePanel.scss';

const SidePanel = () => {
    return (
        <div className="sidepanel">
            <div className="sidepanel_main">
                <img src={avatar} alt="" className="sidepanel_img" />
                <div className="sidepanel_descr">Stepanets Denis</div>
            </div>
            <div className="sidepanel_items">
                <div className="sidepanel_item">
                    <div className='sidepanel_item_content'>
                        <img src={folder} alt="" className="sidepanel_item_folder" />
                        <div className="sidepanel_item_descr">Folder name</div>
                    </div>

                    <img src={arrow} alt="" className="sidepanel_item_arrow"></img>
                </div>
                <div className="sidepanel_item">
                    <div className='sidepanel_item_content'>
                            <img src={folder} alt="" className="sidepanel_item_folder" />
                            <div className="sidepanel_item_descr">Folder name</div>
                        </div>

                        <img src={arrow} alt="" className="sidepanel_item_arrow"></img>
                    </div>
                <div className="sidepanel_item">
                    <div className='sidepanel_item_content'>
                            <img src={folder} alt="" className="sidepanel_item_folder" />
                            <div className="sidepanel_item_descr">Folder name</div>
                        </div>

                        <img src={arrow} alt="" className="sidepanel_item_arrow"></img>
                    </div>
                <div className="sidepanel_item">
                    <div className='sidepanel_item_content'>
                            <img src={folder} alt="" className="sidepanel_item_folder" />
                            <div className="sidepanel_item_descr">Folder name</div>
                        </div>

                        <img src={arrow} alt="" className="sidepanel_item_arrow"></img>
                    </div>
                <div className="sidepanel_item">
                    <div className='sidepanel_item_content'>
                            <img src={folder} alt="" className="sidepanel_item_folder" />
                            <div className="sidepanel_item_descr">Folder name</div>
                        </div>

                        <img src={arrow} alt="" className="sidepanel_item_arrow"></img>
                    </div>
            </div>
        </div>
    )
}

export default SidePanel;