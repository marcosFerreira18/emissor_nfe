import React from 'react';
import PDFView from 'react-native-view-pdf';
import { View } from 'react-native';


import { getDanfe } from '../../services/getDanfe';

const resources = {
  file: Platform.OS === 'ios' ? 'test-pdf.pdf' : '/sdcard/Download/test-pdf.pdf',
  url: 'http://nfe.webmaniabr.com/danfe/32191100003473731781559200000000051117592665/',
  base64: 'JVBERi0xLjMKJcfs...',
};

export default class App extends React.Component {


  state = {
   
    dataDanfe:{ danfe: 'http://nfe.webmaniabr.com/danfe/32191100003473731781559200000000051117592665/',}
  };

  static navigationOptions = {
    title: 'DANFE'
  };

  async componentDidMount() {
    console.log(this.props.navigation.state.params.id)
    this.setState({ dataDanfe: await getDanfe(this.props.navigation.state.params.id) })
  }

  render() {
    const resourceType = 'url';

    return (
      <View style={{ flex: 1 }}>
        {/* Some Controls to change PDF resource */}
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={this.state.dataDanfe['danfe']}
          resourceType={resourceType}
          onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
          onError={(error) => console.log('Cannot render PDF', error)}
        />
      </View>
    );
  }
}