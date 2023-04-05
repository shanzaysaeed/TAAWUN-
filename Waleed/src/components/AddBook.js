import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../services/book.services";

const AddBook = ({ id, setBookId }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBook = {
      title,
      author,
      status,
    };
    console.log(newBook);

    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setAuthor("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setAuthor(docSnap.data().author);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>

      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formCampaignTitle">
            <InputGroup>
              <InputGroup.Text id="formCampaignTitle">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Campaign Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCampaignDesc">
            <InputGroup>
              <InputGroup.Text id="formCampaignDesc">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Campaign Description"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCampaignLocation">
            <InputGroup>
              <InputGroup.Text id="formCampaignLocation">C</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Location"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </InputGroup>
            <div className="flex justify-between items-center">
                <label className="">Upload Poster</label>
                <input className="w-2/3" type="file" id="formFile" />
              </div>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add Campaign
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddBook;
