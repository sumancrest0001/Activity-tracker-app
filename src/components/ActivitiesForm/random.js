<label>Sleeping:</label>
  <input type="number" max="80" name="sleep" id="sleep" onChange={changed} value={values.sleep} placeholder="Hours" required />
          </div >
  <div className={classes.Inputs}>
    <label htmlFor="cook" id="cook-label">Cooking:</label>
    <input type="number" max="80" name="cook" id="cook" onChange={changed} value={values.cook} placeholder="Hours" required />
  </div>
  <div className={classes.Inputs}>
    <label htmlFor="work" id="work-label">Office Work:</label>
    <input type="number" max="80" name="work" id="work" onChange={changed} value={values.work} placeholder="Hours" required />
  </div>
  <div className={classes.Inputs}>
    <label htmlFor="exercise" id="exercise-label">Exercise:</label>
    <input type="number" max="80" name="exercise" id="exercise" onChange={changed} value={values.exercise} placeholder="Hours" required />
  </div>
  <div className={classes.Inputs}>
    <label htmlFor="read" id="read-label">Reading:</label>
    <input type="number" max="80" name="read" id="read" onChange={changed} value={values.read} placeholder="Hours" required />
  </div>
  <div className={classes.Inputs}>
    <label htmlFor="watch" id="watch-label">Watching TV:</label>
    <input type="number" max="80" id="watch" name="watch" onChange={changed} value={values.watch} placeholder="Hours" required />
  </div>