import React from 'react'

const Form = () => {
  return (
    
    <>
        <div className="container my-5">
            <h1>Quizzie</h1>
        <form>
            <div className="container">
                Select The Category
                <div className="mb-3">
                    <label htmlFor="science" className="form-label">Science</label>
                    <input type="checkbox"  id="science"/>
                    <label htmlFor="history" className="form-label">History</label>
                    <input type="checkbox"  id="history"/>
                    <label htmlFor="sports" className="form-label">Sports</label>
                    <input type="checkbox"  id="sports"/>
                </div>
            </div>
            <div className="container">
                Select Number of Questions
                <div className="mb-3">
                <select name="quenumber">
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                </select>
                </div>
            </div>
            <div className="container">
                Select The Difficulty Level
                <div className="mb-3">
                    div.
                    <label htmlFor="easy" className="form-label">Easy</label>
                    <input type="radio" value="easy" name="level" required="required"/>
                    <label htmlFor="medium" className="form-label">Medium</label>
                    <input type="radio" value="medium" name="level" required="required"/>
                    <label htmlFor="hard" className="form-label">Hard</label>
                    <input type="radio" value="hard" name="level"/>
                </div>
            </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </>
  )
}

export default Form
