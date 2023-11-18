import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import { GridContainer } from "../components/styles/GlobalStyles";
import { useLazyGetMoviesQuery } from "../redux/api/index";
const Landing = () => {
  const [trigger] = useLazyGetMoviesQuery();
  const [results, setResults] = useState({
    data: [],
    type: "popular",
    page: 1,
  });
  useEffect(() => {
    trigger({
      page: 1,
      type: "popular",
    }).then((res) => {
      setResults({
        data: res.data.results,
        page: res.data.page,
        type: "popular",
      });
    });
  }, [trigger]);
  const moreRef = useRef(null);
  const data = results.data
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          moreRef.current.click();
        }
      });
    }, options);
    if (data.length) observer.observe(moreRef.current);
  }, [data]);
  const handleMore = () => {
    moreRef.current.disabled = true;
    trigger({
      page: results.page + 1,
      type: results.type,
    }).then((res) => {
      setResults((prev) => {
        return {
          ...prev,
          data: [...prev.data, ...res.data.results],
          page: res.data.page,
        };
      });
      moreRef.current.disabled = false;
    });
  };
  return (
    <GridContainer>
      {data.map(({ title, overview, backdrop_path, id }) => (
        <Card key={id} {...{ title, overview, backdrop_path, id }} />
      ))}
      {data.length && (
        <button ref={moreRef} onClick={handleMore}>
          More
        </button>
      )}
    </GridContainer>
  );
};

export default Landing;
