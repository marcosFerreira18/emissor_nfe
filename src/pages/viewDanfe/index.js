import React from 'react';
import PDFView from 'react-native-view-pdf';
import {View, Text} from 'react-native';

import {getDanfe} from '../../services/getDanfe';

const resources = {
  file:
    Platform.OS === 'ios' ? 'test-pdf.pdf' : '/sdcard/Download/test-pdf.pdf',
  url:
    'https://nfe.webmaniabr.com/danfe/32191100003473731781559200000000051117592665/',
  base64: 'JVBERi0xLjMKJcfs...',
};

export default class App extends React.Component {
  state = {
    danfeOK: false,
    dataDanfe: {
      danfe:
        'https://nfe.webmaniabr.com/danfe/32191100003473731781559200000000051117592665/',
    },
  };

  static navigationOptions = {
    title: 'DANFE',
  };

  async componentDidMount() {
    let id = this.props.navigation.state.params.id;
    let danfe = this.props.navigation.state.params.danfe;
    // console.log('---->> PARAMS', this.props.navigation.state.params);
    // console.log("---->> DANFE", danfe)
    if (id == null) {
      // console.log("---->>", danfe)
      // this.setState({ dataDanfe: { danfe } })

      this.setState({danfeOK: false});
    } else {
      await getDanfe(id).then(dataDanfe => {
        console.log('---->>', dataDanfe);
        this.setState({dataDanfe, danfeOK: true});
        // this.setState({  })
      });
    }
  }

  render() {
    const resourceType = 'url';
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* Some Controls to change PDF resource */}
        {!this.state.danfeOK ? (
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            Carregando DANFE...
          </Text>
        ) : (
          <PDFView
            fadeInDuration={250.0}
            style={{flex: 1, width: '100%', height: '100 %'}}
            resource={this.state.dataDanfe['danfe']}
            resourceType={resourceType}
            onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
            onError={error => console.log('Cannot render PDF', error)}
          />
        )}
      </View>
    );
  }
}
