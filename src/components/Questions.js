export function Questions({question}) {
    return(
        <div className='question'>
            <p className='title'>{question.firstName}</p>
            <p className='pretext'>{question.phone}  |  {question.email}</p>
            <p className='question-text'>{question.message}</p>
        </div>

    );
}
