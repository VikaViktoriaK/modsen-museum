import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArtDetails.scss";
import { Container } from "../../components/Container/Container.jsx";

const ArtDetails = () => {
  const { id } = useParams(); // Destructure id from params
  const [artData, setArtData] = useState(null); // State for storing artwork data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchArtData = async () => {
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks/${id}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArtData(data.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <div className="details-block">
        {artData?.thumbnail ? (
          <img
            className="details-img"
            src={artData.thumbnail.lqip}
            alt={artData.thumbnail.alt_text}
          />
        ) : (
          <div>No Image Available</div> // Fallback if no image
        )}
        <div className="details-content">
          <div>
            <h2 className="details-title">{artData.title}</h2>
            <p className="artist-name">{artData.artist_title}</p>
            <p className="art-age">{artData.date_display}</p>
          </div>
          <div className="overview-block">
            <h2 className="details-title">Overview</h2>
            <div className="overview-details">
              <p>
                <span className="details-label">Artist nationality:</span>
                <span> {artData.artist_nationality || "Unknown"}</span>
              </p>
              <p>
                <span className="details-label">Dimensions: Sheet:</span>
                <span> {artData.dimensions || "Dimensions not provided"}</span>
              </p>
              <p>
                <span className="details-label">Credit Line:</span>
                <span>
                  {" "}
                  {artData.credit_line || "Credit line not provided"}
                </span>
              </p>
              <p>
                <span className="details-label">Repository:</span>
                <span> {artData.repository || "Repository not provided"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ArtDetails;
