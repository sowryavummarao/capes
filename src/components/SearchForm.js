import React, { Component } from 'react';
import { Image, View, ActivityIndicator } from 'react-native';
import { Header, Card, CardSection, Input, Button } from './common';

class SearchForm extends Component {
  state = { name: '', course: '', loading: false };

  onReset() {
    this.setState({ name: '', course: '' });
  }

  onSearch() {
    this.setState({ loading: true });
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' color='yellow' style={styles.spinnerStyle} />;
    }
    return (
      <View style={styles.buttonContainerStyle}>
        <Button text='Search' onPress={this.onSearch.bind(this)} />
        <Button text='Reset' onPress={this.onReset.bind(this)} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.backgroundStyle}>
        <Header headerText='CAPEs' />

        <Card>
          <CardSection>
            <Input
              label='Name: '
              placeholder='(Last Name, First Name)'
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
          </CardSection>
          <CardSection>
            <Input
              label='Course #: '
              placeholder='(ex: CSE xxx)'
              value={this.state.course}
              onChangeText={course => this.setState({ course })}
            />
          </CardSection>
        </Card>

        {this.renderButton()};

        <Image source={require('../../cape.png')} style={styles.imageStyle} />
      </View>
    );
  }
}

const styles = {
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'steelblue'
  },
  buttonContainerStyle: {
    marginTop: 5,
    flexDirection: 'row'
  },
  imageStyle: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    marginTop: 50
  },
  spinnerStyle: {
    marginTop: 10,
  }
};

const mapStateToProps = state => {
  return {
    name: state.auth.name,
    course: state.auth.course,
  };
};

export default connect(mapStateToProps, {
  nameChanged,
  courseChanged,
  loginUser
})(LoginForm);
