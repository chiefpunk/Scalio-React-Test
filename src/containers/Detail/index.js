import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Suspense from "../../components/common/Suspense";
import "./style.module.scss";

function Detail() {
  const history = useHistory();
  const typiData = useSelector(state => state.Typicode);

  const { loading, data, error } = typiData;
  const { body, title } = data;

  /**
   *
   */
  const handleBackPress = () => {
    history.goBack();
  };

  return (
    <Container>
      <Card>
        <Button onClick={handleBackPress}>Back</Button>
        <Suspense loading={loading} error={error} fallback={<p>Loading..</p>}>
          <p>{title}</p>
          <p>{body}</p>
        </Suspense>
      </Card>
    </Container>
  );
}

export default Detail;
