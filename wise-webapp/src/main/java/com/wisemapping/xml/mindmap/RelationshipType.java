//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vJAXB 2.1.10 in JDK 6 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2011.01.16 at 11:06:29 AM ART 
//


package com.wisemapping.xml.mindmap;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for relationshipType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="relationshipType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attribute name="id" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="srcTopicId" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="destTopicId" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="lineType" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="srcCtrlPoint" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="destCtrlPoint" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="endArrow" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="startArrow" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "relationshipType")
public class RelationshipType {

    @XmlAttribute
    protected String id;
    @XmlAttribute
    protected String srcTopicId;
    @XmlAttribute
    protected String destTopicId;
    @XmlAttribute
    protected String lineType;
    @XmlAttribute
    protected String srcCtrlPoint;
    @XmlAttribute
    protected String destCtrlPoint;
    @XmlAttribute
    protected Boolean endArrow;
    @XmlAttribute
    protected Boolean startArrow;

    /**
     * Gets the value of the id property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getId() {
        return id;
    }

    /**
     * Sets the value of the id property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setId(String value) {
        this.id = value;
    }

    /**
     * Gets the value of the srcTopicId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSrcTopicId() {
        return srcTopicId;
    }

    /**
     * Sets the value of the srcTopicId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSrcTopicId(String value) {
        this.srcTopicId = value;
    }

    /**
     * Gets the value of the destTopicId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDestTopicId() {
        return destTopicId;
    }

    /**
     * Sets the value of the destTopicId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDestTopicId(String value) {
        this.destTopicId = value;
    }

    /**
     * Gets the value of the lineType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLineType() {
        return lineType;
    }

    /**
     * Sets the value of the lineType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLineType(String value) {
        this.lineType = value;
    }

    /**
     * Gets the value of the srcCtrlPoint property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSrcCtrlPoint() {
        return srcCtrlPoint;
    }

    /**
     * Sets the value of the srcCtrlPoint property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSrcCtrlPoint(String value) {
        this.srcCtrlPoint = value;
    }

    /**
     * Gets the value of the destCtrlPoint property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDestCtrlPoint() {
        return destCtrlPoint;
    }

    /**
     * Sets the value of the destCtrlPoint property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDestCtrlPoint(String value) {
        this.destCtrlPoint = value;
    }

    /**
     * Gets the value of the endArrow property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isEndArrow() {
        return endArrow;
    }

    /**
     * Sets the value of the endArrow property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setEndArrow(Boolean value) {
        this.endArrow = value;
    }

    /**
     * Gets the value of the startArrow property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isStartArrow() {
        return startArrow;
    }

    /**
     * Sets the value of the startArrow property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setStartArrow(Boolean value) {
        this.startArrow = value;
    }

}
