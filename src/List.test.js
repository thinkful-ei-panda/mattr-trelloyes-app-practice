import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('<List />', () => {
    const props = {
      key: 'test_id',
      header: 'Card title',
      cards: [1, 2, 3],
    }
  
    it('should render without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<List />, div)
      ReactDOM.unmountComponentAtNode(div)
    })
  
    it('renders as expected', () => {
      const wrapper = renderer
        .create(<List name={props.cards[0]} />)
        .toJSON()
      expect(wrapper).toMatchSnapshot()
    })
  
    // it('renders the complete form', () => {
    //   const wrapper = shallow(<List defaultProps />);
    //   wrapper.find('button').at(0).simulate('click');
    //   expect(toJson(wrapper)).toMatchSnapshot();
    // })
  })