# Sim4Web application 0.0.0 documentation





## Table of Contents



* [Servers](#servers)


* [Channels](#channels)





<a name="servers"></a>
## Servers

<table>
  <thead>
    <tr>
      <th>URL</th>
      <th>Protocol</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>172.16.9.154:8080</td>
      <td>ws</td>
      <td>S4L Server</td>
    </tr>
    <tr>
      <td colspan="3">
        <details>
          <summary>URL Variables</summary>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Default value</th>
                <th>Possible values</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              </tbody>
          </table>
        </details>
      </td>
    </tr>
    </tbody>
</table>






## Channels



<a name="channel-socket.io"></a>





#### Channel Parameters







###  `publish` socket.io

#### Message


Accepts **one of** the following messages:##### Message #1


User selects a tool.



Event sent when the user selects a tool. After that, a new ``Tools`` event is expected from the server to confirm that selection. An ``Options`` and possibly ``Actions`` events are also expected.






##### Payload




<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    
      
<tr>
  <td>id </td>
  <td>string</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
  </tbody>
</table>



###### Example of payload _(generated)_

```json
{
  "id": "string"
}
```





##### Message #2


User selects an action.



Event sent when the user selects an action. After that, a new ``Actions`` event is expected from the server to confirm that selection. Actions are linked to tool options so maybe an ``Options`` should be expected.






##### Payload




<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    
      
<tr>
  <td>id </td>
  <td>string</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
  </tbody>
</table>



###### Example of payload _(generated)_

```json
{
  "id": "string"
}
```





##### Message #3


User changes a tool option value.



Sent when the user changes a field in the tool options form. A new ``Options`` message confirms the modification.






##### Payload




<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    
      
<tr>
  <td>id </td>
  <td>string</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
      
<tr>
  <td>path </td>
  <td>string</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
      
<tr>
  <td>value </td>
  <td>[object Object]</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
  </tbody>
</table>



###### Example of payload _(generated)_

```json
{
  "id": "string",
  "path": "string",
  "value": null
}
```





##### Message #4


User changes a model entity property value.



Sent when the user changes a field in the model entity properties form. A new ``Properties`` message confirms the modification.






##### Payload




<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    
      
<tr>
  <td>id </td>
  <td>string</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
      
<tr>
  <td>path </td>
  <td>string</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
      
<tr>
  <td>value </td>
  <td>[object Object]</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
  </tbody>
</table>



###### Example of payload _(generated)_

```json
{
  "id": "string",
  "path": "string",
  "value": null
}
```





##### Message #5


User selects one or several model entities



Sent when the user changes the selection of model entities.






##### Payload




<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    
      
<tr>
  <td>selectedIds </td>
  <td>array(string)</td>
  <td></td>
  <td><em>Any</em></td>
</tr>









    
  </tbody>
</table>



###### Example of payload _(generated)_

```json
{
  "selectedIds": [
    "string"
  ]
}
```





##### Message #6


Sends a mouse user input.







##### Payload




<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    
      
<tr>
  <td>pos </td>
  <td>object</td>
  <td></td>
  <td><em>Any</em></td>
</tr>





<tr>
  <td>pos.x </td>
  <td>integer</td>
  <td></td>
  <td><em>Any</em></td>
</tr>









<tr>
  <td>pos.y </td>
  <td>integer</td>
  <td></td>
  <td><em>Any</em></td>
</tr>











    
      
<tr>
  <td>type </td>
  <td>string</td>
  <td></td>
  <td><code>mouseup</code>, <code>mousedown</code>, <code>mousemove</code>, <code>wheel</code></td>
</tr>







    
      
<tr>
  <td>altKey </td>
  <td>boolean</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
      
<tr>
  <td>shiftKey </td>
  <td>boolean</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
      
<tr>
  <td>ctrlKey </td>
  <td>boolean</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
      
<tr>
  <td>button </td>
  <td>integer</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
  </tbody>
</table>



###### Example of payload _(generated)_

```json
{
  "pos": {
    "x": 0,
    "y": 0
  },
  "type": "mouseup",
  "altKey": true,
  "shiftKey": true,
  "ctrlKey": true,
  "button": 0
}
```





##### Message #7


Sends a keyboard user input.







##### Payload




<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    
      
<tr>
  <td>key </td>
  <td>string</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
      
<tr>
  <td>altKey </td>
  <td>boolean</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
      
<tr>
  <td>shiftKey </td>
  <td>boolean</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
      
<tr>
  <td>ctrlKey </td>
  <td>boolean</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
  </tbody>
</table>



###### Example of payload _(generated)_

```json
{
  "key": "string",
  "altKey": true,
  "shiftKey": true,
  "ctrlKey": true
}
```








###  `subscribe` socket.io

#### Message


Accepts **one of** the following messages:##### Message #1


Updates the list of available tools.



Tools are retreived when the client starts and connects and can be hierarchically organised in categories.






##### Payload




<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    
      
<tr>
  <td>tools </td>
  <td>array()</td>
  <td></td>
  <td><em>Any</em></td>
</tr>









    
  </tbody>
</table>



###### Example of payload _(generated)_

```json
{
  "tools": [
    {
      "id": "string",
      "label": "string",
      "tooltip": "string",
      "selected": false,
      "enabled": true,
      "icon": "string"
    }
  ]
}
```





##### Message #2


Updates the list of available actions for the tool



Some tools can display a set of actions that correlate to tool options, but are displayed differently.






##### Payload




<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    
      
<tr>
  <td>actions </td>
  <td>array(object)</td>
  <td></td>
  <td><em>Any</em></td>
</tr>








<tr>
  <td>actions.id </td>
  <td>string</td>
  <td></td>
  <td><em>Any</em></td>
</tr>









<tr>
  <td>actions.label </td>
  <td>string</td>
  <td></td>
  <td><em>Any</em></td>
</tr>









<tr>
  <td>actions.tooltip </td>
  <td>string</td>
  <td></td>
  <td><em>Any</em></td>
</tr>









<tr>
  <td>actions.selected </td>
  <td>boolean</td>
  <td></td>
  <td><em>Any</em></td>
</tr>









<tr>
  <td>actions.enabled </td>
  <td>boolean</td>
  <td></td>
  <td><em>Any</em></td>
</tr>









<tr>
  <td>actions.icon </td>
  <td>string</td>
  <td></td>
  <td><em>Any</em></td>
</tr>










    
  </tbody>
</table>



###### Example of payload _(generated)_

```json
{
  "actions": [
    {
      "id": "string",
      "label": "string",
      "tooltip": "string",
      "selected": false,
      "enabled": true,
      "icon": "string"
    }
  ]
}
```





##### Message #3


Sends the list of options and their values, for the selected tool.



When a tool is selected, its options are displayed to the user. These options can be modified from the user (``optionChange`` event), but also the server can update them.






##### Payload




<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    
      
<tr>
  <td>options </td>
  <td>object</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
  </tbody>
</table>



###### Example of payload _(generated)_

```json
{
  "options": {}
}
```





##### Message #4


Updates de list of properties and their values, for the selected tool.



When a model entity is selected, its properties are displayed to the user. These options can be modified from the user (``propertyChange`` event), but also the server can update them.






##### Payload




<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    
      
<tr>
  <td>properties </td>
  <td>object</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
  </tbody>
</table>



###### Example of payload _(generated)_

```json
{
  "properties": {}
}
```





##### Message #5


Model entities tree.



Contains all the necessary information to build the model entity tree.






##### Payload




<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    
      
<tr>
  <td>modelEntities </td>
  <td>object</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
  </tbody>
</table>



###### Example of payload _(generated)_

```json
{
  "modelEntities": {}
}
```





##### Message #6


Transmits a new renderer image of the modeler to the client.



Remote update of the modeler view with a new rendered image. This optionally includes a set of ``OverlayMeasure``s that have to be rendered on top of the model at the given coordinates.






##### Payload




<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    
      
<tr>
  <td>renderImage </td>
  <td>object</td>
  <td></td>
  <td><em>Any</em></td>
</tr>







    
      
<tr>
  <td>overlayMeasures </td>
  <td>array(object)</td>
  <td></td>
  <td><em>Any</em></td>
</tr>








<tr>
  <td>overlayMeasures.pos </td>
  <td>object</td>
  <td></td>
  <td><em>Any</em></td>
</tr>





<tr>
  <td>overlayMeasures.pos.x </td>
  <td>integer</td>
  <td></td>
  <td><em>Any</em></td>
</tr>









<tr>
  <td>overlayMeasures.pos.y </td>
  <td>integer</td>
  <td></td>
  <td><em>Any</em></td>
</tr>













<tr>
  <td>overlayMeasures.value </td>
  <td>string,number</td>
  <td></td>
  <td><em>Any</em></td>
</tr>









<tr>
  <td>overlayMeasures.unit </td>
  <td>string</td>
  <td></td>
  <td><em>Any</em></td>
</tr>










    
  </tbody>
</table>



###### Example of payload _(generated)_

```json
{
  "renderImage": {},
  "overlayMeasures": [
    {
      "pos": {
        "x": 0,
        "y": 0
      },
      "value": null,
      "unit": "string"
    }
  ]
}
```










