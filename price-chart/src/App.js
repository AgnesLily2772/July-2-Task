import './App.css';
import PriceChart from './Components/PriceChart';
import Header from './Components/Header';
function App() {
  let data = [
    {
      plan:"FREE",
      price:"0",
      user:"Single User",
      isUser:true,
      storage:"5GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAcess:true,
      privateProjects:"Unlimited Projects",
      isPrivateProjects:false,
      phoneSupport :"Dedicated Phone Support",
      isPhoneSupport : false,
      subDomain:"Free Subdomain",
      isSubDomain:false,
      reports:"Monthly Status Report",
      isReports:false,
    },
    {   
      plan:"PLUS",
      price:"9",
      user:"5 Users",
      isUser:true,
      storage:"50GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAcess:true,
      privateProjects:"Unlimited Projects",
      isPrivateProjects:true,
      phoneSupport :"Dedicated Phone Support",
      isPhoneSupport :true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Report",
      isReports:false,
    },
    {
      plan:"PRO",
      price:"49",
      user:"Unlimited Users",
      isUser:true,
      storage:"150GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAcess:true,
      privateProjects:"Unlimited Projects",
      isPrivateProjects:true,
      phoneSupport :"Dedicated Phone Support",
      isPhoneSupport :true,
      subDomain:"Unlinited Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Report",
      isReports:true,
    }
  ];

  return (
    <div className="App">
      <Header/>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {data.map((i,k)=>{
        return <PriceChart i={i} key={k}/>
      })}
    </div>
  </div>
</section>
    </div>
  );
}

export default App;
