import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App(){
    return (
        <div >
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">Personal Digital Assistants</p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title="Alexa" handle="@alexa99" source={AlexaImage} description="Alexa was created by Amazon and helps you buy things" />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Cortana" handle="@Cortana32" source={CortanaImage} description="Cortana was made by Microsoft who knows what it does" />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Siri" handle="@Siri72" source={SiriImage} description="Siri was made by apple and is being phased out" />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default App;