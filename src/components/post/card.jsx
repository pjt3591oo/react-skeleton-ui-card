import styled, { css } from 'styled-components';
import SkeletonItem from './item';

const CardSkeleton = (props) => {
  console.log(props);
  console.log(new Array(props.lastPostCount).fill(''));
  return (
    <Wrapper>
      {props.isLoading && new Array(props.lastPostCount).fill('').map((_, i) => (
        <Card key={i}>
          <Title isLoading={true}/>
          <Content isLoading={true}/>
          <Bottom>
            <Circle isLoading={true}/>
            <Title isLoading={true}/>
          </Bottom>
        </Card>
      ))}
      {
        props.posts.map((post, i) => (
          <Card key={i}>
            <Title isLoading={props.isLoading}>{post.title}</Title>
            <Content isLoading={props.isLoading}>{post.content}</Content>
            <Bottom isLoading={props.isLoading}>
              <Circle img={post.img} isLoading={props.isLoading}></Circle>
              <Title >{post.name}</Title>
            </Bottom>
          </Card>
        ))
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  background: #fff;
  width: 33%;
  padding: 20px;
  margin-top: 10px;
  border-radius: 15px;
  box-sizing: border-box;
`;

const Title = styled(SkeletonItem)`
  margin-top: 10px;
`;

const Content = styled(SkeletonItem)`
  margin-top: 10px;
  height: 130px;
  ${props => {
    console.log('props')
  }}
`;

const Bottom = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 12px;
`;

const Circle = styled(SkeletonItem)`
  margin-top: 10px;
  width: 35px;
  height: 30px;
  border-radius: 50%;
  ${props => props.isLoading ? css`background-color: #f2f2f2;` : css`background-image: url('${props.img}');`}

  position: relative;
  overflow: hidden;
`;

export default CardSkeleton;