import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './App.css'
import PackageItem from './components/PackageItem'

class App extends Component {
  state = {packagesList: [], isLoading: false}

  componentDidMount() {
    this.getTravelPackagesData()
  }

  getTravelPackagesData = async () => {
    this.setState({isLoading: true})
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(eachPackage => ({
        id: eachPackage.id,
        name: eachPackage.name,
        imageUrl: eachPackage.image_url,
        description: eachPackage.description,
      }))
      this.setState({packagesList: updatedData, isLoading: false})
    }
  }

  renderTravelGuidePackagesList = () => {
    const {packagesList} = this.state
    return (
      <ul className="packages-list">
        {packagesList.map(each => (
          <PackageItem packageData={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="travel-heading">Travel Guide</h1>
        <hr />
        <div>
          {isLoading
            ? this.renderLoader()
            : this.renderTravelGuidePackagesList()}
        </div>
      </div>
    )
  }
}

export default App
