type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
handleEvent('mousemove'); // OK
// handleEvent('scroll'); // Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent