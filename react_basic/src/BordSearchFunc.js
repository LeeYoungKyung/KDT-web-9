import React, { useState, useRef } from 'react';

function BoardSearchFun() {
    const [inputWriter, setInputWriter] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [comments, setComments] = useState([]);
    // Search
    const [inputSearch, setInputSearch] = useState('');
    const [searchType, setSearchType] = useState('title');
    const [results, setResults] = useState([]);
    
    const writerInputRef = useRef(null);
    const searchInputRef = useRef(null);

    const onChangeWriter = (event) => {
        setInputWriter(event.target.value);
    };

    const onChangeTitle = (event) => {
        setInputTitle(event.target.value);
    };

    const addComment = () => {
        if (inputWriter.trim() === '' || inputTitle.trim() === '') {
            // Focus on the writer input if input is empty
            writerInputRef.current.focus();
            return;
        }

        const newComment = {
            writer: inputWriter,
            title: inputTitle,
        };
        setComments([...comments, newComment]);
        setInputTitle('');
        setInputWriter('');
    };

    const searchComment = () => {
        if (inputSearch.trim() === '') {
            // Focus on the search input if it's empty
            searchInputRef.current.focus();
            return; 
        }

        const searchResult = comments.filter((comment) => {
            const type = comment[searchType];
            return type.includes(inputSearch);
        });
        setResults(searchResult);
    };

    return (
        <div>
            <form>
                <label htmlFor="writer">작성자:</label>
                <input id="writer" type="text" value={inputWriter} onChange={onChangeWriter} ref={writerInputRef} />
                <label htmlFor="title">제목:</label>
                <input id="title" type="text" value={inputTitle} onChange={onChangeTitle} />
                <button type="button" onClick={addComment}>
                    작성
                </button>
            </form>

            <form>
                <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                    <option value="writer">작성자</option>
                    <option value="title">제목</option>
                </select>
                <input
                    type="text"
                    placeholder="검색어"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                    ref={searchInputRef}
                />
                <button type="button" onClick={searchComment}>
                    검색
                </button>
            </form>
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((comment, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{comment.title}</td>
                            <td>{comment.writer}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {results.length > 0 && (
                <div>
                    <h4>검색결과</h4>
                    <table border={1} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{result.title}</td>
                                    <td>{result.writer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default BoardSearchFun;
